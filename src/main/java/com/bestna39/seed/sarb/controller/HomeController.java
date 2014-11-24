package com.bestna39.seed.sarb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/home")
public class HomeController {

    @RequestMapping(value = "/index")
    public void index() {

    }
}
