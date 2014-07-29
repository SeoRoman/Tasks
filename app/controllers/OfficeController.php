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
		// Create the Data Array
		$data = [
			'id' => Input::get('id'),
			'name' => Input::get('name'),
			'address' => Input::get('address'),
			'city' => Input::get('city'),
			'state' => Input::get('state'),
			'zip' => Input::get('zip')
		];

		$rules = array('id'=>'required');
		$validator = Validator::make($data, $rules);

		// Validation Request
		if ($validator->fails())
		{
			$messages = $validator->messages();
			return Response::json([ 'status' => 0, 'message' => $messages->first() ], 400);
		}

		// Server Request
		try {
			$office = new Office();
			$office->fill($data);
			$office->save();
			return Response::json([ 'data' => $office ], 200);
		}
		catch(\Exception $e) {
			return Response::json([ 'status' => $e->getCode(), 'message' => $e->getMessage() ], 500);
		}

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
		$office = $this->office->withTrashed()->where('id', $id)->first();

		if (!$office) {
			return Response::json(array('message' => 'Office Not Found'), 400);
		}
		if ($office->deleted_at)
		{
			return Response::json(array('message' => 'Deleted Item: Only Administrator Access'), 400);
		}

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
		$this->office->destroy($id);
	}


}
