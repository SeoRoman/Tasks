<?php

class TaskCommentController extends \BaseController {

	protected $comment;

	public function __construct(Comment $comment)
	{
		$this->comment = $comment;
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index($ProjectID, $TaskListID, $TaskID)
	{
		$comments = $this->comment->with('author')->where('commentable_type', 'Task')->where('commentable_id', $TaskID)->orderBy('created_at','desc')->get();
		return Response::json($comments, 200);
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
			'commentable_id' => Input::get('commentable_id'),
			'commentable_type' => Input::get('commentable_type'),
			'created_by'=>Input::get('created_by'),
			'body' => Input::get('body')
		];

		$rules = array('body'=>'required');
		$validator = Validator::make($data, $rules);

		// Validation Request
		if ($validator->fails())
		{
			$messages = $validator->messages();
			return Response::json([ 'status' => 0, 'message' => $messages->first() ], 400);
		}

		// Server Request
		try {
			$comment = new Comment();
			$comment->fill($data);
			$comment->save();
			return Response::json([ 'comment' => $comment ], 200);
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
	public function show($projectId, $commentlistId, $commentId)
	{
		return $this->comment->where('id', $commentId)->first();
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
			'user_id' => Input::get('user_id'),
			'comments_lists_id' => Input::get('comments_lists_id'),
			'title' => Input::get('title'),
			'description' => Input::get('description')
		);
		
		//dd('ProjectID: ' . $ProjectID . ' TaskListID: ' . $TaskListID . ' TaskID: ' . $TaskID);

		//                                                                                                                                                                                                                        dd(Input::all());

		try {
			$comment = $this->comment->withTrashed()->where('id', $TaskID)->first();

			if (!$comment) {
				return Response::json(array('status'=> 0, 'message' => 'Task Not Found'), 400);
			}
			if ($comment->deleted_at)
			{
				return Response::json(array('status' => 0, 'message' => 'Deleted Item: Only Administrator Access'), 400);
			}

			$comment->fill($data);
			$comment->save();
			return Response::json([ 'data' => $comment ], 200);
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
		$this->comment->destroy($id);
	}


}
