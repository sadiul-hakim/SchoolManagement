<?php

namespace App\Http\Controllers;

use App\Models\ClassList;
use App\Http\Requests\StoreClassListRequest;
use App\Http\Requests\UpdateClassListRequest;
use App\Models\Section;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ClassListController extends Controller
{
    use AuthorizesRequests;

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = ClassList::query();
        if ($request->search) {
            $query->where('name', 'like', "%{$request->search}%");
        }

        // sort by name (ascending)
        $query->orderBy('name', 'asc');

        return inertia('ClassList', [
            'sections' => Section::all(),
            'class_list' => $query->with('sections')->paginate(10)->withQueryString(),
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
    public function store(StoreClassListRequest $request)
    {
        $class = ClassList::create($request->only('name', 'active'));
        Log::info('New Class has been created.', [
            'name' => $class->name,
        ]);
        $class->sections()->sync($request->sections);
        return back()->with('success', "Class {$class->name} is created successfully.");
    }

    /**
     * Display the specified resource.
     */
    public function show(ClassList $classList)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ClassList $classList)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateClassListRequest $request, ClassList $classList)
    {
        // 1. Update class data
        $classList->update($request->only('name', 'active'));

        // 2. Sync sections (important)
        $classList->sections()->sync($request->sections ?? []);

        return back()->with('success', "Class {$classList->name} updated successfully.");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ClassList $classList)
    {
        $this->authorize('delete', $classList);

        Log::info("Deleting Class " . $classList->name);

        // 1. Break relationship with sections
        $classList->sections()->detach();

        // 2. Delete the class itself
        $classList->delete();

        return back()->with('success', 'Class deleted successfully.');
    }
}
