<?php

class OrganizationController extends \BaseController {

	protected $organization;

	public function __construct(Organization $organization)
	{
		$this->organization = $organization;
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$organizations = $this->organization->with('projects')->get();
		return Response::json($organizations, 200);
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
			'user_id' => 1,
			'name' => Input::get('name')
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
			$organization = new Organization();
			$organization->fill($data);
			$organization->save();
			return Response::json([ 'data' => $organization ], 200);
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
		return $this->organization->find($id);
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
		$organization = $this->organization->withTrashed()->where('id', $id)->first();

		if (!$organization) {
			return Response::json(array('status'=> 0, 'message' => 'Organization Not Found'), 400);
		}
		if ($organization->deleted_at)
		{
			return Response::json(array('status' => 0, 'message' => 'Deleted Item: Only Administrator Access'), 400);
		}

		//
		$data = array(
			'user_id' => 1,
			'name' => Input::get('name')
		);

		try {
			$organization = $this->organization->find($id);
			$organization->fill($data);
			$organization->save();
			return Response::json([ 'data' => $organization ], 200);
		}
		catch(\Exception $e)
		{
			return Response::json([ 'status' => $e->getCode(), 'message' => $e->getMessage() ], 500);
		}

	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$this->organization->destroy($id);
	}


}
