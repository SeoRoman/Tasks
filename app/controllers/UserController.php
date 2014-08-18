<?php

class UserController extends \BaseController {

	protected $user;

	public function __construct(User $user)
	{
		$this->user = $user;
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$users = $this->user->get();
		return Response::json($users, 200);
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
		];

		$rules = array();
		$validator = Validator::make($data, $rules);

		// Validation Request
		if ($validator->fails())
		{
			$messages = $validator->messages();
			return Response::json([ 'status' => 0, 'message' => $messages->first() ], 400);
		}

		// Server Request
		try {
			$user = new User();
			$user->fill($data);
			$user->save();
			return Response::json([ 'user' => $user ], 200);
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
		try {
			$user = $this->user->where('id', $id)->first();	
			return Response::json([ 'user' => $user ], 200);
		}
		catch(\Exception $e)
		{
			return Response::json([ 'status' => $e->getCode(), 'message' => $e->getMessage()], 500);
		}
		
		
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
		$data = array(
		);
		
		try {
			$user = $this->user->withTrashed()->where('id', $id)->first();

			if (!$user) {
				return Response::json(array('status'=> 0, 'message' => 'User Not Found'), 400);
			}
			if ($user->deleted_at)
			{
				return Response::json(array('status' => 0, 'message' => 'Deleted Item: Only Administrator Access'), 400);
			}

			$user->fill($data);
			$user->save();
			return Response::json([ 'user' => $user ], 200);
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
		$this->user->destroy($id);
	}


}
