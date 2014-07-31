<?php

	class AuthController extends \MyController {

		public function postLogin()
		{
			$credentials = array(
				'username'=>Input::get('username'),
				'password'=>Input::get('password')
			);			

			if (Auth::attempt($credentials))
			{
				return Response::json(array('user'=>Auth::user()), 200);
			}

			return Response::json(array('status' => 0, 'message' => 'Invalid Login Credentials'), 401);
		}

		public function getLogout()
		{
			if (Auth::guest()) return Response::json(array('status' => 0, 'message' => 'You are not logged in'), 401);

			Auth::logout();
			return Response::json(array(), 200);
		}

	}

?>