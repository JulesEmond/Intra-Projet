package com.intrabackend.service;

import com.intrabackend.model.Guess;
import com.intrabackend.repository.GuessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class IntraService {

    @Autowired
    GuessRepository guessRepository;

    public Guess createGuess (String nom, int guessValue){
        if (guessValue >= 1){
            Guess guess = new Guess();
            Random random = new Random();
            guess.setNom(nom);
            guess.setGuessUtilisateur(guessValue);
            guess.setNumeroRandom(random.nextInt(6) +1);
            guessRepository.save(guess);
            return guess;
        }
        return null;
    }

    public List<Guess> getAllGuesses(){
        return guessRepository.findAll();
    }
}
