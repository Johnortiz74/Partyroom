package com.reto.reto3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.reto.reto3.model.Message;
import com.reto.reto3.repository.MessageRepository;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    public List<Message> obtenerMessageCompleta(){
        return messageRepository.obtenerMessageCompleta();
    }

    public Optional<Message> obtenermessageid(Integer idMessage){
        return messageRepository.obtenerMessageId(idMessage);
    }

    public Message salvarMessage(Message message){
        if (message.getIdMessage() == null) {
            return messageRepository.salvarMessage(message);
            
        }else {
            Optional <Message> messageAuxiliar = messageRepository.obtenerMessageId(message.getIdMessage());
            if (messageAuxiliar.isEmpty()) {
                return messageRepository.salvarMessage(message);
                
            }else{
                return message;
            }
        }
    }
}
