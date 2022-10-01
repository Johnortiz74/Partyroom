package com.reto.reto3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.reto.reto3.model.Partyroom;
import com.reto.reto3.repository.PartyroomRepository;

@Service
public class PartyroomService {

    @Autowired
    private PartyroomRepository partyroomRepository;

    public List<Partyroom> obtenerPartyroomall() {
        return partyroomRepository.obtenerPartyroomall();
    }

    public Optional<Partyroom> obtenerPartyroomId(Integer id) {
        return partyroomRepository.obtenerPartyroomId(id);
    }

    public Partyroom salvarPartyroom(Partyroom partyroom) {
        if (partyroom.getId() == null) {
            return partyroomRepository.salvarPartyroom(partyroom);

        } else {
            Optional<Partyroom> partyroomAuxiliar = partyroomRepository.obtenerPartyroomId(partyroom.getId());
            if (partyroomAuxiliar.isEmpty()) {
                return partyroomRepository.salvarPartyroom(partyroom);

            } else {
                return partyroom;
            }
        }
    }

}
