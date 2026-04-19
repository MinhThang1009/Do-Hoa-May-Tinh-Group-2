class SoundEngineClass {
    private ctx: AudioContext | null = null;
    private isUnlocked = false;
    public isMuted = false;
    public volume = 0.6; // Mặc định 60% âm lượng
    private previousVolume = 0.6; // Lưu mức âm thanh trước khi Mute

    constructor() {
        if (typeof window !== "undefined") {
            const savedVol = localStorage.getItem("app_volume");
            if (savedVol !== null) {
                this.volume = parseFloat(savedVol);
                this.isMuted = this.volume === 0;
                this.previousVolume = this.volume > 0 ? this.volume : 0.6;
            }
        }
    }

    toggleMute(): boolean {
        if (this.volume > 0) {
            this.previousVolume = this.volume;
            this.setVolume(0);
        } else {
            this.setVolume(this.previousVolume > 0 ? this.previousVolume : 0.6);
            this.playClick();
        }
        return this.isMuted;
    }

    setVolume(val: number) {
        this.volume = Math.max(0, Math.min(1, val));
        this.isMuted = this.volume === 0;
        if (this.volume > 0) this.previousVolume = this.volume;
        if (typeof window !== "undefined") {
            localStorage.setItem("app_volume", this.volume.toString());
        }
    }

    init() {
        if (typeof window === "undefined") return;
        try {
            if (!this.ctx) {
                this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
            }
            if (this.ctx && this.ctx.state === "suspended") {
                this.ctx.resume();
            }
            this.isUnlocked = true;
        } catch (e) {
            console.warn("Web Audio API not supported", e);
        }
    }

    playHover() {
        if (this.isMuted || this.volume === 0) return;
        this.init();
        if (!this.ctx) return;
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        // Tiếng "Típ" kỹ thuật số siêu ngắn
        osc.type = "sine";
        osc.frequency.setValueAtTime(1000, t);
        osc.frequency.exponentialRampToValueAtTime(1500, t + 0.02);

        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.015 * this.volume, t + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.03);

        osc.start(t);
        osc.stop(t + 0.04);
    }

    playClick() {
        if (this.isMuted || this.volume === 0) return;
        this.init();
        if (!this.ctx) return;
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        // Tiếng Click cơ học chắc chắn (Lab Glass Tap)
        osc.type = "triangle";
        osc.frequency.setValueAtTime(400, t);
        osc.frequency.exponentialRampToValueAtTime(100, t + 0.05);

        gain.gain.setValueAtTime(0, t);
        // Tích hợp Volume
        gain.gain.linearRampToValueAtTime(0.08 * this.volume, t + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);

        osc.start(t);
        osc.stop(t + 0.07);
    }

    playSplashSweep() {
        if (this.isMuted || this.volume === 0) return;
        this.init();
        if (!this.ctx) return;
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        // Âm thanh vút qua vũ trụ sci-fi lúc Load Screen
        osc.type = "square";
        osc.frequency.setValueAtTime(50, t);
        osc.frequency.exponentialRampToValueAtTime(400, t + 1.5);

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(200, t);
        filter.frequency.exponentialRampToValueAtTime(2000, t + 1.5);

        gain.gain.setValueAtTime(0, t);
        // Tích hợp Volume
        gain.gain.linearRampToValueAtTime(0.02 * this.volume, t + 0.5);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 2);

        osc.start(t);
        osc.stop(t + 2.1);
    }
}

export const SoundEngine = new SoundEngineClass();
