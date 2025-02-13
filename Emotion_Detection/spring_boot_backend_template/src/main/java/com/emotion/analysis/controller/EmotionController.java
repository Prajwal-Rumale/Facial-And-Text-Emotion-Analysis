

package com.emotion.analysis.controller;

import com.emotion.analysis.model.TextAnalysis;
import com.emotion.analysis.model.ImageAnalysis;
import com.emotion.analysis.service.EmotionService;

import java.util.Map;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping("/api/emotion")
@CrossOrigin(origins = "http://localhost:3000") 
public class EmotionController {

    private final EmotionService emotionService;

    public EmotionController(EmotionService emotionService) {
        this.emotionService = emotionService;
    }

    @PostMapping("/analyze-text")
    public TextAnalysis analyzeText(@RequestBody Map<String, String> request) {
        return emotionService.analyzeText(request.get("text"));
    }

//    @PostMapping("/analyze-image")
//    public ImageAnalysis analyzeImage(@RequestParam("imagePath") String imagePath) {
//        return emotionService.analyzeImage(imagePath);
//    }
    
    @PostMapping("/analyze-image")
    public ImageAnalysis analyzeImage(@RequestParam("file") MultipartFile file) {
        // Process the uploaded file
        return emotionService.analyzeImage(file);
    }

    
    
    
}

