<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\SectionController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('/', function () {
        return inertia('Dashboard');
    })->name('dashboard');

    Route::resource('sections', SectionController::class);

    Route::post("/logout", [AuthController::class, "logout"])->name("logout");
});

Route::inertia('/login', 'Login')->name('login');
Route::controller(AuthController::class)->group(function () {
    Route::post("/login", "login")->middleware("throttle:5,1");
});
