package com.example.demo.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Api(tags = "샘플 API", description = "데모용 샘플 엔드포인트")
public class SampleController {

    @GetMapping("/hello")
    @ApiOperation("인사 말하기")
    public String sayHello() {
        return "안녕하세요, 스웨거!";
    }
}

