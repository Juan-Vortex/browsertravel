<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Consultas;

class historialController extends Controller
{
    public function historial(){

        $historial = Consultas::all();

        return view('historial.index', compact('historial'));

    }

}
