package com.emotion.analysis.service;
import org.springframework.core.io.ByteArrayResource;
import com.emotion.analysis.model.TextAnalysis;
import com.emotion.analysis.model.ImageAnalysis;
import com.emotion.analysis.repository.TextAnalysisRepository;
import com.emotion.analysis.repository.ImageAnalysisRepository;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Service
public class EmotionService {

	private final RestTemplate restTemplate = new RestTemplate();
    private final TextAnalysisRepository textAnalysisRepository;
    private final ImageAnalysisRepository imageAnalysisRepository;

    public EmotionService(TextAnalysisRepository textAnalysisRepository, ImageAnalysisRepository imageAnalysisRepository) {
        this.textAnalysisRepository = textAnalysisRepository;
        this.imageAnalysisRepository = imageAnalysisRepository;
    }

    public TextAnalysis analyzeText(String text) {
        String url = "http://127.0.0.1:5000/analyze-text";
        
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        
        Map<String, String> request = new HashMap<>();
        request.put("text", text);

        HttpEntity<Map<String, String>> entity = new HttpEntity<>(request, headers);
        ResponseEntity<Map> response = restTemplate.exchange(url, HttpMethod.POST, entity, Map.class);

        String emotion = (String) response.getBody().get("emotion");
        double confidence = (double) response.getBody().get("confidence");

        TextAnalysis analysis = new TextAnalysis(null, text, emotion, confidence);
        return textAnalysisRepository.save(analysis);
    }
    
 

 public ImageAnalysis analyzeImage(MultipartFile file) {
     String url = "http://127.0.0.1:5000/analyze-image";

     // Prepare headers
     HttpHeaders headers = new HttpHeaders();
     headers.setContentType(MediaType.MULTIPART_FORM_DATA);

     // Prepare the body with the file using ByteArrayResource
     MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
     try {
         ByteArrayResource fileAsResource = new ByteArrayResource(file.getBytes()) {
             @Override
             public String getFilename() {
                 return file.getOriginalFilename();
             }
         };
         body.add("file", fileAsResource);
     } catch (IOException e) {
         throw new RuntimeException("Error reading file", e);
     }

     // Build the HttpEntity with headers and body
     HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

     // Use RestTemplate to send the request
     RestTemplate restTemplate = new RestTemplate();
     ResponseEntity<Map> response = restTemplate.exchange(url, HttpMethod.POST, requestEntity, Map.class);

     // Retrieve emotion from the response
     String emotion = (String) response.getBody().get("emotion");

     // Create an ImageAnalysis entity. Adjust according to your entity design.
     ImageAnalysis analysis = new ImageAnalysis(null, file.getOriginalFilename(), emotion);
     
     // Save and return the analysis
     return imageAnalysisRepository.save(analysis);
 }

}
