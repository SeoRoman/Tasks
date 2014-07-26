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

			return Response::json(array(), 401);
		}

	}

?>