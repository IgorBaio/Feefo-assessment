package org.feefo.enums;

public enum JobsNormalized {
    SOFTWARE_ENGINEER("Software engineer"),
    ACCOUNTANT("Accountant");

    private String job;

    JobsNormalized(String job) {
        this.job = job;
    }

    public String getJob() {
        return job;
    }
}
