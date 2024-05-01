package org.feefo.service;

import java.util.HashMap;
import java.util.Map;

public class Normaliser {

    private static final Map<String, String> IDEAL_TITLES = new HashMap<>();

    static {
        IDEAL_TITLES.put("Software engineer", "Software engineer");
        IDEAL_TITLES.put("Quantity surveyor", "Quantity surveyor");
        IDEAL_TITLES.put("Accountant", "Accountant");
    }

    public String normalise(String input) {
        double bestScore = 0.0;
        String bestMatch = null;

        for (Map.Entry<String, String> entry : IDEAL_TITLES.entrySet()) {
            String idealTitle = entry.getKey();
            double score = calculateScore(input, idealTitle);

            if (score > bestScore) {
                bestScore = score;
                bestMatch = entry.getValue();
            }
        }

        return bestMatch;
    }

    private double calculateScore(String input, String idealTitle) {
        int[][] dp = new int[input.length() + 1][idealTitle.length() + 1];

        for (int i = 0; i <= input.length(); i++) {
            dp[i][0] = i;
        }

        for (int j = 0; j <= idealTitle.length(); j++) {
            dp[0][j] = j;
        }

        for (int i = 1; i <= input.length(); i++) {
            for (int j = 1; j <= idealTitle.length(); j++) {
                int cost = (input.charAt(i - 1) == idealTitle.charAt(j - 1)) ? 0 : 1;

                dp[i][j] = Math.min(dp[i - 1][j] + 1, Math.min(dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost));
            }
        }

        int maxLen = Math.max(input.length(), idealTitle.length());
        double similarity = 1.0 - (double) dp[input.length()][idealTitle.length()] / maxLen;
        return similarity;
    }

}
