<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pages extends CI_Controller {

	public function index()
	{
		$data["title"] = "First Prime";
		$data["header"] = "Container Vision";
		$this->load->view("header/header", $data);
		$this->load->view("pages/prime", $data);
	}
	public function forms()
	{
		$data["title"] = "Form Prime";
		$data["header"] = "Forms Vision";
		$this->load->view("header/header", $data);
		$this->load->view("pages/forms", $data);
	}
	public function colors()
	{
		$data["title"] = "Color Prime";
		$data["header"] = "Color Vision";
		$this->load->view("header/header", $data);
		$this->load->view("pages/colors", $data);
	}
	public function tabs()
	{
		$data["title"] = "Tab Prime";
		$data["header"] = "Tab Vision";
		$this->load->view("header/header", $data);
		$this->load->view("pages/tabs", $data);
	}

}

/* End of file Pages.php */
/* Location: ./application/controllers/Pages.php */