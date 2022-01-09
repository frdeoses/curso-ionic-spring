package com.curso.spring.controllers;

import com.curso.spring.entities.Custumer;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CustumerController {

    @GetMapping("/api/custumers")
    public List<Custumer> getAll(){
        List<Custumer> custumers = new ArrayList<>();

        custumers.add(new Custumer());

        return custumers;
    }
}
