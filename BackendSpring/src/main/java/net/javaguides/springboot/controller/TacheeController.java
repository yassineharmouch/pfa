package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Tachee;
import net.javaguides.springboot.repository.TacheeRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v2/")
public class TacheeController {


	@Autowired
	private TacheeRepository tacheeRepository;

	// get all tachees
	@GetMapping("/tachees")
	public List<Tachee> getAllTachees(){
		return tacheeRepository.findAll();
	}

	// create tachee rest api
	@PostMapping("/tachees")
	public Tachee createTachee(@RequestBody Tachee tachee) {
		return tacheeRepository.save(tachee);
	}

	// get tachee by id rest api
	@GetMapping("/tachees/{id}")
	public ResponseEntity<Tachee> getTacheeById(@PathVariable Long id) {
		Tachee tachee = tacheeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Tachee not exist with id :" + id));
		return ResponseEntity.ok(tachee);
	}

	// update tachee rest api

	@PutMapping("/tachees/{id}")
	public ResponseEntity<Tachee> updateTachee(@PathVariable Long id, @RequestBody Tachee tacheeDetails){
		Tachee tachee = tacheeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Tachee not exist with id :" + id));

		tachee.setTitre(tacheeDetails.getTitre());
		tachee.setDescription(tacheeDetails.getDescription());
		tachee.setStatus(tacheeDetails.getStatus());

		Tachee updatedTachee = tacheeRepository.save(tachee);
		return ResponseEntity.ok(updatedTachee);
	}

	// delete tachee rest api
	@DeleteMapping("/tachees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteTachee(@PathVariable Long id){
		Tachee tachee = tacheeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Tachee not exist with id :" + id));

		tacheeRepository.delete(tachee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}


}
