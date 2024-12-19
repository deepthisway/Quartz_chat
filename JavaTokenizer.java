import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class JavaTokenizer {

    private static final String TOKEN_REGEX =
            "\\b(class|public|private|protected|static|void|int|String|if|else|while|for|return|new|null|true|false)\\b|" + // Keywords
            "[a-zA-Z_][a-zA-Z0-9_]*|" + // Identifiers
            "\\d+|" + // Integers
            "\"(.*?)\"|" + // String literals
            "[+\\-*/=<>!&|]+|" + // Operators
            "[{}();,.\\[\\]]"; // Punctuation

    public static List<String> tokenize(String code) {
        List<String> tokens = new ArrayList<>();
        Pattern pattern = Pattern.compile(TOKEN_REGEX);
        Matcher matcher = pattern.matcher(code);

        while (matcher.find()) {
            tokens.add(matcher.group());
        }

        return tokens;
    }

    public static void main(String[] args) {
        String javaCode = "public class Example { "
                        + "int number = 42; "
                        + "String text = \"Hello, World!\"; "
                        + "if (number > 0) { "
                        + "return text; "
                        + "} "
                        + "}";

        List<String> tokens = tokenize(javaCode);
        for (String token : tokens) {
            System.out.println(token);
        }
    }
}
