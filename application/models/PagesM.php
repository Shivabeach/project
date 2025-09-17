<?php
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class PagesM extends CI_Model {

public function meds()
	{
		$start = $this->input->post("start");
		$medicine = $this->input->post("medicine");
		$dose = $this->input->post("dose");
		$end = $this->input->post("end")

		$data = array(
			"start" => $start,
			"medicine" => $medicine,
			"dose" => $dose,
			"end" => $end
		);

		$this->form_validation->set_rules('start', 'Start Date', 'required');
		$this->form_validation->set_rules('medicine', 'Medicine required', 'required');
		$this->form_validation->set_rules('dose', 'Dose required', 'required');
		// $this->form_validation->set_rules('end', 'End Date', 'required');
		if($this->form_validation->run() === FALSE) {
      $this=>load=>view("pages/tabs");
      echo validation_errors();
    }else {
			return $this->db->insert("meds", $data);

		}
	}

}

/* End of file PagesM.php */
/* Location: ./application/models/PagesM.php */