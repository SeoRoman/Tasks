<?php

class TaskListController extends \BaseController {

	protected $tasklist;

	public function __construct(TaskList $tasklist)
	{
		$this->tasklist = $tasklist;
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$tasklists = $this->tasklist->all();
		return Response::json($tasklists, 200);
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
			'tasks_projects_id' => 1,
			'title' => Input::get('title'),
		];

		$rules = array('title'=>'required');
		$validator = Validator::make($data, $rules);

		// Validation Request
		if ($validator->fails())
		{
			$messages = $validator->messages();
			return Response::json([ 'status' => 0, 'message' => $messages->first() ], 400);
		}

		// Server Request
		try {
			$tasklist = new TaskList();
			$tasklist->fill($data);
			$tasklist->save();
			return Response::json([ 'data' => $tasklist ], 200);
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
		return $this->tasklist->find($id);
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
		$tasklist = $this->tasklist->withTrashed()->where('id', $id)->first();

		if (!$tasklist) {
			return Response::json(array('status'=> 0, 'message' => 'TaskList Not Found'), 400);
		}
		if ($tasklist->deleted_at)
		{
			return Response::json(array('status' => 0, 'message' => 'Deleted Item: Only Administrator Access'), 400);
		}

		//
		$data = array(
			'title' => Input::get('title')
		);

		try {
			$tasklist = $this->tasklist->find($id);
			$tasklist->fill($data);
			$tasklist->save();
			return Response::json([ 'data' => $tasklist ], 200);
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
		$this->tasklist->destroy($id);
	}


}
