<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('/', function () {

        $user = Auth::user();
        return inertia('Dashboard', [
            'user' => $user,
            'profile' => $user->profile()
        ]);
    })->name('dashboard');
});

Route::inertia('/login', 'Login')->name('login');
Route::controller(AuthController::class)->group(function () {
    Route::post("/login", "login")->middleware("throttle:5,1");
});
