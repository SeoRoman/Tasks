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
	public function index($ProjectID, $TaskListID)
	{
		$tasks = $this->task->with('author')->where('tasks_lists_id', $TaskListID)->get();
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
			'created_by' => Input::get('created_by'),
			'tasks_lists_id' => Input::get('tasks_lists_id'),
			'title' => Input::get('title'),
			'description' => Input::get('description')
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
			$task = new Task();
			$task->fill($data);
			$task->save();
			
			return $task;
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
		try {
			$task = $this->task->with('author')->where('id', $taskId)->first();	
			return Response::json([ 'task' => $task ], 200);
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
	public function update($ProjectID, $TaskListID, $TaskID)
	{
		$data = array(
			'created_by' => Input::get('created_by'),
			'tasks_lists_id' => Input::get('tasks_lists_id'),
			'title' => Input::get('title'),
			'description' => Input::get('description')
		);
		
		//dd('ProjectID: ' . $ProjectID . ' TaskListID: ' . $TaskListID . ' TaskID: ' . $TaskID);

		//                                                                                                                                                                                                                        dd(Input::all());

		try {
			$task = $this->task->withTrashed()->where('id', $TaskID)->first();

			if (!$task) {
				return Response::json(array('status'=> 0, 'message' => 'Task Not Found'), 400);
			}
			if ($task->deleted_at)
			{
				return Response::json(array('status' => 0, 'message' => 'Deleted Item: Only Administrator Access'), 400);
			}

			$task->fill($data);
			$task->save();
			return Response::json([ 'task' => $task ], 200);
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
