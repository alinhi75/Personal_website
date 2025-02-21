<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;

Route::get('/projects', [ProjectController::class, 'index']);


// Home page
Route::get('/', function () {
    return view('welcome');
});

//API endpoint
Route::get('/api/projects', [ProjectController::class, 'index']);
Route::get('/api/research', [ResearchController::class, 'research']);
Route::get('/api/cv', [CvController::class, 'cv']);
Route::get('/api/contact', [ContactController::class, 'contact']);


