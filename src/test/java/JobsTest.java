import org.feefo.enums.JobsNormalized;
import org.feefo.service.Normaliser;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class JobsTest {
    @Test
    public void startJtJavaEngineer(){
        String jt = "Java engineer";
        Normaliser n = new Normaliser();
        String normalisedTitle = n.normalise(jt);
        Assertions.assertEquals(JobsNormalized.SOFTWARE_ENGINEER.getJob(), normalisedTitle);
    }
    
    @Test
    public void startJtCSharpEngineer(){
        String jt = "C# engineer";
        Normaliser n = new Normaliser();
        String normalisedTitle = n.normalise(jt);
        Assertions.assertEquals(JobsNormalized.SOFTWARE_ENGINEER.getJob(), normalisedTitle);
    }
    @Test
    public void startJtChiefAccountant(){
        String jt = "Chief Accountant";
        Normaliser n = new Normaliser();
        String normalisedTitle = n.normalise(jt);
        Assertions.assertEquals(JobsNormalized.ACCOUNTANT.getJob(), normalisedTitle);
    }
    @Test
    public void startJtAccountant(){
        String jt = "Accountant";
        Normaliser n = new Normaliser();
        String normalisedTitle = n.normalise(jt);
        Assertions.assertEquals(JobsNormalized.ACCOUNTANT.getJob(), normalisedTitle);
    }
}
