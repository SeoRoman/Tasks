<?php

class TaskController extends \BaseController {

	protected $task;

	public function __construct(Task $task)
	{
		$this->task = $task;
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$tasks = $this->task->all();
		return Response::json($tasks, 200);
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
			'subject' => Input::get('subject'),
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
			$task = new Task();
			$task->fill($data);
			$task->save();
			return Response::json([ 'data' => $task ], 200);
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
	public function show($projectId, $tasklistId, $taskId)
	{
		return $this->task->where('id', $taskId)->first();
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
		$task = $this->task->withTrashed()->where('id', $id)->first();

		if (!$task) {
			return Response::json(array('status'=> 0, 'message' => 'Task Not Found'), 400);
		}
		if ($task->deleted_at)
		{
			return Response::json(array('status' => 0, 'message' => 'Deleted Item: Only Administrator Access'), 400);
		}

		//
		$data = array(
			'id' => Input::get('id'),
			'subject' => Input::get('subject'),
		);

		try {
			$task = $this->task->find($id);
			$task->fill($data);
			$task->save();
			return Response::json([ 'data' => $task ], 200);
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
		$this->task->destroy($id);
	}


}
