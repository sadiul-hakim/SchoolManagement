<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClassListController;
use App\Http\Controllers\ClassRoomController;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\TeacherController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('/', function () {
        return inertia('Dashboard');
    })->name('dashboard');

    Route::resource('sections', SectionController::class);
    Route::resource('class_list', ClassListController::class);
    Route::resource('class_room', ClassRoomController::class);
    Route::resource('subjects', SubjectController::class);
    Route::resource('teachers', TeacherController::class);

    Route::post("/logout", [AuthController::class, "logout"])->name("logout");
});

Route::inertia('/login', 'Login')->name('login');
Route::controller(AuthController::class)->group(function () {
    Route::post("/login", "login")->middleware("throttle:5,1");
});
