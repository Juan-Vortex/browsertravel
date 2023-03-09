@extends('layouts.app')

@section('title', 'Home')

@section('content')

    <div class="container text-center"><br>
        <h2>Browser Travel - Historial de Consultas</h2>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th>Ciudad</th>
                    <th>Fecha</th>
                    <th>Humedad</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($historial as $item)
                    <tr>
                        <td>{{$item->ciudad}}</td>
                        <td>{{$item->created_at}}</td>
                        <td>{{$item->humedad}}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
    
@endsection