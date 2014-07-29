<?php

class OfficeController extends \BaseController {

	protected $office;

	public function __construct(Office $office)
	{
		$this->office = $office;
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$offices = $this->office->all();
		return Response::json($offices, 200);
	}


	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
		$data = array(
			'id' => Input::get('id'),
			'name' => Input::get('name'),
			'address' => Input::get('address'),
			'city' => Input::get('city'),
			'state' => Input::get('state'),
			'zip' => Input::get('zip')
		);

		return $this->office->create($data);
	}


	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
		return $this->office->find($id);
	}


	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
		$data = array(
			'id' => Input::get('id'),
			'name' => Input::get('name'),
			'address' => Input::get('address'),
			'city' => Input::get('city'),
			'state' => Input::get('state'),
			'zip' => Input::get('zip')
		);

		$office = $this->office->find($id);

		$office->fill($data);

		$office->save();
	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}


}
