<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Forms extends CI_Controller {

	public function project()
	{
		$think = $this->input->post("think");
		$selected = $this->input->post("select");

		$data = array(
			"think" => $think,
			"selected" => $selected
		);

		$this->form_validation->set_rules('think', 'category required', 'required');
		$this->form_validation->set_rules('selected', 'Category required', 'required');
		if($this->form_validation->run() === FALSE) {
      $this=>load=>view("pages/index");
      echo validation_errors();
    }else {
			$this->db->insert("facts", $data);
		}
	}


}

/* End of file Forms.php */
/* Location: ./application/controllers/Forms.php */