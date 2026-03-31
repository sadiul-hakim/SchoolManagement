<?php

use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->web(append: [
            HandleInertiaRequests::class,
            AddLinkHeadersForPreloadedAssets::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        $exceptions->render(function (Exception $ex, $request) {

            if ($ex instanceof AuthenticationException) {
                return redirect()->guest(route('login'));
            }

            $status = 500;

            if (method_exists($ex, 'getStatusCode')) {
                $status = $ex->getStatusCode();
            }

            if ($status != 404) {
                Log::error("{$status} :: {$ex->getMessage()}");
            }

            return Inertia::render('Error', [
                'status' => $status
            ])->toResponse($request)->setStatusCode($status);
        });
    })->create();
