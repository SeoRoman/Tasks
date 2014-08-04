<?php

	class SessionController extends \MyController {

		public function getRetrieve()
		{
			return Session::all();
		}

		public function postUpdate()
		{
			
		}

	}

?>