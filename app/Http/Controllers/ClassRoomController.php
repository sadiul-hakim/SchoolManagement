<?php

namespace App\Http\Controllers;

use App\Models\ClassRoom;
use App\Http\Requests\StoreClassRoomRequest;
use App\Http\Requests\UpdateClassRoomRequest;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ClassRoomController extends Controller
{
    use AuthorizesRequests;

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = ClassRoom::query();
        if ($request->search) {
            $query->where('number', $request->search)
                ->orWhere('capacity', $request->search);
        }

        // sort by name (ascending)
        $query->orderBy('number', 'asc');

        return inertia('ClassRoom', [
            'class_room' => $query->paginate(10)->withQueryString(),
            'filters' => $request->only(['search'])
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreClassRoomRequest $request)
    {
        $data = $request->validated();
        $room = ClassRoom::create($data);
        Log::info('New Room has been created.', [
            'number' => $room->number,
        ]);
        return back()->with('success', 'Class Room No. ' . $room->number . ' has been added.');
    }

    /**
     * Display the specified resource.
     */
    public function show(ClassRoom $classRoom)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ClassRoom $classRoom)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateClassRoomRequest $request, ClassRoom $classRoom)
    {
        $data = $request->validated();
        $classRoom->update($data);
        return back()->with('success', 'Room has been updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ClassRoom $classRoom)
    {
        $this->authorize('delete', $classRoom);
        $number = $classRoom->number;
        Log::info('Deleting Room No. ' . $number);
        $classRoom->delete();
        return back()->with('success', 'Class Room No. ' . $number . ' has been deleted.');
    }
}
