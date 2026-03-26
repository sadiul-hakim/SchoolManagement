<?php

namespace App\Http\Controllers;

use App\Models\Section;
use App\Http\Requests\StoreSectionRequest;
use App\Http\Requests\UpdateSectionRequest;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class SectionController extends Controller
{
    use AuthorizesRequests;

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Section::query();
        if ($request->search) {
            $query->where('name', 'like', "%{$request->search}%");
        }

        // sort by name (ascending)
        $query->orderBy('name', 'asc');

        return inertia('Section', [
            'sections' => $query->paginate(10)->withQueryString(),
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
    public function store(StoreSectionRequest $request)
    {
        $section = Section::create($request->validated());
        Log::info('New section has been created.', [
            'name' => $section->name,
        ]);
        return back()->with('success', "Section {$section->name} is created successfully.");
    }

    /**
     * Display the specified resource.
     */
    public function show(Section $section)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Section $section)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSectionRequest $request, Section $section)
    {
        $section->update($request->validated());
        return back()->with('success', "Section {$section->name} is updated successfully.");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Section $section)
    {
        $this->authorize('delete', $section);
        if ($section->classes()->exists()) {
            return back()->with([
                'error' => 'Cannot delete section. It is assigned to one or more classes.'
            ]);
        }

        $name = $section->name;
        $section->delete();
        Log::info('Section has been deleted.', [
            'name' => $section->name,
        ]);
        return back()->with('success', "Successfully deleted section {$name}");
    }
}
