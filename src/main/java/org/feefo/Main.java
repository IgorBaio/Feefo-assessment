package org.feefo;

import org.feefo.service.Normaliser;

public class Main {
    public static void main(String[] args) {
        String jt = "Java engineer";
        Normaliser n = new Normaliser();
        String normalisedTitle = n.normalise(jt);
        // output normalisedTitle
        System.out.println(normalisedTitle);
        
        jt = "C# engineer";
        normalisedTitle = n.normalise(jt);
        // output normalisedTitle
        System.out.println(normalisedTitle);
        
        
        jt = "Chief Accountant";
        normalisedTitle = n.normalise(jt);
        // output normalisedTitle
        System.out.println(normalisedTitle);
    }
}