import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Lightbulb, CheckCircle2, XCircle } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import CodeBlock from "./CodeBlock";

interface ExerciseCardProps {
  title: string;
  description: string;
  starterCode?: string;
  hints?: string[];
  solution: string;
  language: string;
}

export default function ExerciseCard({
  title,
  description,
  starterCode,
  hints = [],
  solution,
  language,
}: ExerciseCardProps) {
  const [userCode, setUserCode] = useState(starterCode || "");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const handleSubmit = () => {
    const normalizedUser = userCode.trim().replace(/\s+/g, " ");
    const normalizedSolution = solution.trim().replace(/\s+/g, " ");
    
    const correct = normalizedUser === normalizedSolution;
    setIsCorrect(correct);
    setSubmitted(true);
    
    if (correct) {
      console.log("Exercise completed successfully!");
    }
  };

  const handleReset = () => {
    setUserCode(starterCode || "");
    setSubmitted(false);
    setIsCorrect(false);
    setShowSolution(false);
  };

  return (
    <Card className="p-6 border-2" data-testid="component-exercise">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2" data-testid="text-exercise-title">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Your Code:</label>
          <Textarea
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            className="font-mono text-sm min-h-32"
            placeholder="Write your code here..."
            data-testid="input-exercise-code"
          />
        </div>

        {submitted && (
          <Alert variant={isCorrect ? "default" : "destructive"} data-testid="alert-exercise-result">
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  <AlertDescription>Great job! Your solution is correct.</AlertDescription>
                </>
              ) : (
                <>
                  <XCircle className="h-4 w-4" />
                  <AlertDescription>Not quite right. Try again or check the hints.</AlertDescription>
                </>
              )}
            </div>
          </Alert>
        )}

        <div className="flex flex-wrap gap-2">
          <Button onClick={handleSubmit} data-testid="button-submit-exercise">
            Submit Answer
          </Button>
          <Button onClick={handleReset} variant="outline" data-testid="button-reset-exercise">
            Reset
          </Button>
          
          {hints.length > 0 && (
            <Collapsible open={showHints} onOpenChange={setShowHints}>
              <CollapsibleTrigger asChild>
                <Button variant="outline" data-testid="button-toggle-hints">
                  <Lightbulb className="h-4 w-4 mr-2" />
                  {showHints ? "Hide Hints" : "Get Hints"}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4">
                <div className="space-y-2 border-l-4 border-primary pl-4">
                  {hints.map((hint, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">
                      <strong>Hint {idx + 1}:</strong> {hint}
                    </p>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          )}

          <Button
            variant="outline"
            onClick={() => setShowSolution(!showSolution)}
            data-testid="button-toggle-solution"
          >
            {showSolution ? "Hide Solution" : "Show Solution"}
          </Button>
        </div>

        {showSolution && (
          <div>
            <h4 className="text-sm font-semibold mb-2">Solution:</h4>
            <CodeBlock code={solution} language={language} />
          </div>
        )}
      </div>
    </Card>
  );
}
