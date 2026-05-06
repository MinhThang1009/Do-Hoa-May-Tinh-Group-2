import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Clock3, Play, RotateCcw, Timer, Trophy, XCircle, Zap } from "lucide-react";
import { SplitTextTitle } from "../../components/SplitTextTitle";

type QuizQuestion = {
  id: string;
  lesson: string;
  question: string;
  choices: string[];
  answer: string;
  explanation: string;
};

const totalSeconds = 60;
const wrongPenaltySeconds = 5;
const pointsPerCorrectAnswer = 10;

const questions: QuizQuestion[] = [
  {
    id: "acid-litmus",
    lesson: "Bài 8",
    question: "Dung dịch acid làm quỳ tím chuyển màu gì?",
    choices: ["Xanh", "Đỏ", "Vàng", "Không đổi màu"],
    answer: "Đỏ",
    explanation: "Dung dịch acid làm quỳ tím chuyển đỏ.",
  },
  {
    id: "base-litmus",
    lesson: "Bài 9",
    question: "Dung dịch NaOH làm quỳ tím chuyển màu gì?",
    choices: ["Đỏ", "Xanh", "Tím đậm", "Không đổi màu"],
    answer: "Xanh",
    explanation: "NaOH là bazơ mạnh nên làm quỳ tím chuyển xanh.",
  },
  {
    id: "neutralization-product",
    lesson: "Bài 9",
    question: "NaOH + HCl tạo ra sản phẩm nào?",
    choices: ["NaCl + H2O", "Na2O + Cl2", "NaH + HClO", "NaOH2 + Cl"],
    answer: "NaCl + H2O",
    explanation: "Bazơ tác dụng với acid tạo muối và nước.",
  },
  {
    id: "ph-base",
    lesson: "Bài 9",
    question: "Dung dịch bazơ thường có pH như thế nào?",
    choices: ["pH < 7", "pH = 7", "pH > 7", "pH luôn bằng 1"],
    answer: "pH > 7",
    explanation: "Dung dịch bazơ có pH lớn hơn 7.",
  },
  {
    id: "ph-neutral",
    lesson: "Bài 9",
    question: "Dung dịch trung tính có pH bằng bao nhiêu?",
    choices: ["1", "5", "7", "14"],
    answer: "7",
    explanation: "Môi trường trung tính có pH bằng 7.",
  },
  {
    id: "oxide-definition",
    lesson: "Bài 10",
    question: "Oxide là hợp chất của oxygen với...",
    choices: ["Hydrogen", "Một nguyên tố khác", "Chỉ kim loại", "Chỉ phi kim"],
    answer: "Một nguyên tố khác",
    explanation: "Oxide gồm oxygen liên kết với một nguyên tố khác.",
  },
  {
    id: "co2-type",
    lesson: "Bài 10",
    question: "CO2 thuộc nhóm chất nào?",
    choices: ["Acid", "Bazơ", "Oxide", "Muối"],
    answer: "Oxide",
    explanation: "CO2 là oxide của carbon.",
  },
  {
    id: "naoh-type",
    lesson: "Bài 9",
    question: "NaOH thuộc nhóm chất nào?",
    choices: ["Acid", "Bazơ", "Oxide", "Muối"],
    answer: "Bazơ",
    explanation: "NaOH có nhóm hydroxide OH nên thuộc bazơ.",
  },
  {
    id: "nacl-type",
    lesson: "Bài 11",
    question: "NaCl thuộc nhóm chất nào?",
    choices: ["Acid", "Bazơ", "Oxide", "Muối"],
    answer: "Muối",
    explanation: "NaCl là muối sodium chloride.",
  },
  {
    id: "acid-example",
    lesson: "Bài 8",
    question: "Chất nào sau đây là acid?",
    choices: ["HCl", "NaOH", "CaO", "NaCl"],
    answer: "HCl",
    explanation: "HCl là hydrochloric acid.",
  },
  {
    id: "base-common-group",
    lesson: "Bài 9",
    question: "Bazơ thường có nhóm nào trong phân tử?",
    choices: ["SO4", "OH", "Cl", "CO3"],
    answer: "OH",
    explanation: "Bazơ thường có nguyên tử kim loại liên kết với nhóm hydroxide OH.",
  },
  {
    id: "oxide-acid-product",
    lesson: "Bài 10",
    question: "Oxide bazơ tác dụng với acid thường tạo ra...",
    choices: ["Muối và nước", "Bazơ và oxygen", "Acid và hydrogen", "Chỉ tạo nước"],
    answer: "Muối và nước",
    explanation: "Oxide bazơ tác dụng với acid tạo muối và nước.",
  },
];

export function QuickQuizGame() {
  const [status, setStatus] = useState<"idle" | "running" | "finished">("idle");
  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  const currentQuestion = questions[questionIndex % questions.length];
  const isAnswerCorrect = selectedChoice === currentQuestion.answer;
  const progress = Math.round(((totalSeconds - timeLeft) / totalSeconds) * 100);

  const resultMessage = useMemo(() => {
    if (score >= 90) return "Rất chắc kiến thức Chương 2";
    if (score >= 50) return "Nắm được ý chính, nên luyện thêm phản ứng";
    return "Nên ôn lại khái niệm acid, bazơ, oxide và muối";
  }, [score]);

  useEffect(() => {
    if (status !== "running") return;

    const timer = window.setInterval(() => {
      setTimeLeft((current) => {
        if (current <= 1) {
          window.clearInterval(timer);
          setStatus("finished");
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [status]);

  const startGame = () => {
    setStatus("running");
    setTimeLeft(totalSeconds);
    setQuestionIndex(0);
    setScore(0);
    setCorrectCount(0);
    setSelectedChoice(null);
  };

  const chooseAnswer = (choice: string) => {
    if (status !== "running" || selectedChoice) return;

    const isCorrect = choice === currentQuestion.answer;
    setSelectedChoice(choice);

    if (isCorrect) {
      setScore((current) => current + pointsPerCorrectAnswer);
      setCorrectCount((current) => current + 1);
    } else {
      setTimeLeft((current) => Math.max(0, current - wrongPenaltySeconds));
    }

    window.setTimeout(() => {
      setSelectedChoice(null);
      setQuestionIndex((current) => current + 1);
    }, 700);
  };

  return (
    <div className="min-h-screen page-enter relative overflow-hidden pb-24">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <header className="text-center mb-12">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(245,158,11,0.16)] to-[rgba(56,189,248,0.10)] border border-[rgba(245,158,11,0.28)]" />
            <div className="absolute inset-0 rounded-full ring-pulse" />
            <Timer className="relative w-10 h-10 text-amber-400 chem-icon-glow" />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-400 mb-3">
            Game tốc độ
          </p>
          <SplitTextTitle
            text="Đố nhanh 60 giây"
            className="text-4xl md:text-6xl font-extrabold mb-5 text-[var(--text)]"
            highlightWords={["60", "giây"]}
            highlightColor="#f59e0b"
          />
          <p className="max-w-3xl mx-auto text-lg text-[var(--muted)] leading-relaxed">
            Trả lời càng nhiều câu càng tốt trong 60 giây. Đúng cộng 10 điểm, sai bị trừ 5 giây.
          </p>
        </header>

        <section className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
          <div className="rounded-2xl glass-panel chem-shimmer-border animated-border-card overflow-hidden">
            <div className="p-7 border-b border-white/10 bg-gradient-to-br from-amber-500/10 to-sky-500/5">
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="rounded-2xl border border-amber-400/25 bg-amber-500/10 p-4 text-center">
                  <Clock3 className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-400">Thời gian</p>
                  <p className="text-3xl font-black text-[var(--text)]">{timeLeft}s</p>
                </div>
                <div className="rounded-2xl border border-emerald-400/25 bg-emerald-500/10 p-4 text-center">
                  <Trophy className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">Điểm</p>
                  <p className="text-3xl font-black text-[var(--text)]">{score}</p>
                </div>
                <div className="rounded-2xl border border-sky-400/25 bg-sky-500/10 p-4 text-center">
                  <Zap className="w-5 h-5 text-sky-400 mx-auto mb-2" />
                  <p className="text-xs font-bold uppercase tracking-widest text-sky-400">Đúng</p>
                  <p className="text-3xl font-black text-[var(--text)]">{correctCount}</p>
                </div>
              </div>

              <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 to-sky-400 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="p-7">
              {status === "idle" && (
                <div className="min-h-[320px] flex flex-col items-center justify-center text-center">
                  <Play className="w-14 h-14 text-amber-400 mb-5" />
                  <h2 className="text-2xl font-extrabold text-[var(--text)] mb-3">Sẵn sàng ôn nhanh</h2>
                  <p className="max-w-md text-[var(--muted)] leading-relaxed mb-6">
                    Nội dung câu hỏi xoay quanh Bài 8 đến Bài 11: acid, bazơ, thang pH, oxide và muối.
                  </p>
                  <button
                    type="button"
                    onClick={startGame}
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-amber-500/15 border border-amber-400/35 text-amber-300 font-bold hover:bg-amber-500/25 transition-colors"
                  >
                    <Play className="w-4 h-4" />
                    Bắt đầu
                  </button>
                </div>
              )}

              {status === "finished" && (
                <div className="min-h-[320px] flex flex-col items-center justify-center text-center">
                  <Trophy className="w-16 h-16 text-amber-400 mb-5" />
                  <h2 className="text-3xl font-extrabold text-[var(--text)] mb-3">{score} điểm</h2>
                  <p className="max-w-md text-[var(--muted)] leading-relaxed mb-2">
                    Bạn trả lời đúng {correctCount} câu trong 60 giây.
                  </p>
                  <p className="max-w-md text-amber-300 font-bold mb-6">{resultMessage}</p>
                  <button
                    type="button"
                    onClick={startGame}
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-white/5 border border-white/10 text-[var(--text)] font-bold hover:bg-white/10 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Chơi lại
                  </button>
                </div>
              )}

              {status === "running" && (
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                      {currentQuestion.lesson}
                    </p>
                    <p className="text-sm font-bold text-[var(--muted)]">
                      Câu {questionIndex + 1}
                    </p>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--text)] leading-snug mb-6">
                    {currentQuestion.question}
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {currentQuestion.choices.map((choice) => {
                      const isSelected = selectedChoice === choice;
                      const isCorrectChoice = choice === currentQuestion.answer;
                      const showCorrect = selectedChoice && isCorrectChoice;
                      const showWrong = isSelected && !isCorrectChoice;

                      return (
                        <button
                          key={choice}
                          type="button"
                          onClick={() => chooseAnswer(choice)}
                          className={`min-h-20 rounded-2xl px-5 py-4 border text-left transition-all duration-300 ${
                            showCorrect
                              ? "bg-emerald-500/15 border-emerald-400/40"
                              : showWrong
                                ? "bg-red-500/15 border-red-400/40"
                                : "bg-white/5 border-white/10 hover:bg-white/10 hover:scale-[1.01]"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-lg font-extrabold text-[var(--text)]">{choice}</span>
                            {showCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                            {showWrong && <XCircle className="w-5 h-5 text-red-400 shrink-0" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          <aside className="rounded-2xl glass-panel chem-shimmer-border animated-border-card overflow-hidden">
            <div className="p-7 border-b border-white/10 bg-gradient-to-br from-sky-500/10 to-amber-500/5">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-2">
                Luật chơi
              </p>
              <h2 className="text-3xl font-extrabold text-[var(--text)]">Ôn trước kiểm tra</h2>
            </div>
            <div className="p-7 space-y-4">
              <div className="rounded-2xl border border-emerald-400/25 bg-emerald-500/10 p-5">
                <p className="text-sm font-bold text-emerald-300 mb-2">Trả lời đúng</p>
                <p className="text-sm text-[var(--muted)]">Cộng {pointsPerCorrectAnswer} điểm và chuyển sang câu tiếp theo.</p>
              </div>
              <div className="rounded-2xl border border-red-400/25 bg-red-500/10 p-5">
                <p className="text-sm font-bold text-red-300 mb-2">Trả lời sai</p>
                <p className="text-sm text-[var(--muted)]">Bị trừ {wrongPenaltySeconds} giây, sau đó chuyển câu tiếp theo.</p>
              </div>
              <div className="rounded-2xl border border-sky-400/25 bg-sky-500/10 p-5">
                <p className="text-sm font-bold text-sky-300 mb-2">Mẹo nhanh</p>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Acid làm quỳ tím đỏ; bazơ làm quỳ tím xanh; bazơ có pH lớn hơn 7; oxide có oxygen;
                  muối thường gồm kim loại và gốc acid.
                </p>
              </div>

              {selectedChoice && status === "running" && (
                <div
                  className={`rounded-2xl border p-5 ${
                    isAnswerCorrect
                      ? "border-emerald-400/30 bg-emerald-500/10"
                      : "border-red-400/30 bg-red-500/10"
                  }`}
                >
                  <p className={`text-sm font-bold mb-2 ${isAnswerCorrect ? "text-emerald-300" : "text-red-300"}`}>
                    {isAnswerCorrect ? "Chính xác" : "Chưa đúng"}
                  </p>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                </div>
              )}
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
