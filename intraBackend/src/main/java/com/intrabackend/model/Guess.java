package com.intrabackend.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@SequenceGenerator(name = "seq", allocationSize = 100)
public class Guess {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq")
    private int id;

    private String nom;

    private int guessUtilisateur;

    private int numeroRandom;
}
