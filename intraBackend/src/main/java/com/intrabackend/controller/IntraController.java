package com.intrabackend.controller;

import com.intrabackend.model.Guess;
import com.intrabackend.repository.GuessRepository;
import com.intrabackend.service.IntraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class IntraController {

    @Autowired
    GuessRepository guessRepository;

    @Autowired
    IntraService intraService;


    @PostMapping("/guess/{nom}/{guess}")
    public Guess createGuess(@PathVariable String nom, @PathVariable int guess){
        return intraService.createGuess(nom, guess);
    }

    @GetMapping("/guess/list")
    public List<Guess> getAllGuesses(){
        return intraService.getAllGuesses();
    }
}
