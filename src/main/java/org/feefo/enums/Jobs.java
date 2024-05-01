package org.feefo.enums;

public enum Jobs {
    JAVA_ENGINEER("Java engineer"),
    CSHARP_ENGINEER("C# engineer"),
    CHIEF_ACCOUNTANT("Chief Accountant"),
    ACCOUNTANT("Accountant");

    private String job;

    Jobs(String job) {
        this.job = job;
    }

    public String getJob() {
        
        return job;
    }

}
