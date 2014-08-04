<?php

class ProjectController extends \BaseController {

	protected $project;

	public function __construct(Project $project)
	{
		$this->project = $project;
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$projects = $this->project->with('tasklists')->get();
		return Response::json($projects, 200);
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
			$project = new Project();
			$project->fill($data);
			$project->save();
			return Response::json([ 'data' => $project ], 200);
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
		return $this->project->with('tasklists.tasks')->where('id', $id)->first();
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
		$project = $this->project->withTrashed()->where('id', $id)->first();

		if (!$project) {
			return Response::json(array('status'=> 0, 'message' => 'Project Not Found'), 400);
		}
		if ($project->deleted_at)
		{
			return Response::json(array('status' => 0, 'message' => 'Deleted Item: Only Administrator Access'), 400);
		}

		//
		$data = array(

		);

		try {
			$project = $this->project->find($id);
			$project->fill($data);
			$project->save();
			return Response::json([ 'data' => $project ], 200);
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
		$this->project->destroy($id);
	}


}
