export const FeedbackReaction = () => {
    return (
        <div className="feedback-reaction-component">
            <div class="feedback">
                <label class="angry">
                    <input type="radio" value="1" name="feedback" />
                    <div>
                        <svg class="eye left">
                            <path d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1"></path>
                        </svg>
                        <svg class="eye right">
                            <path d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1"></path>
                        </svg>
                        <svg class="mouth">
                            <path d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1"></path>
                        </svg>
                    </div>
                </label>
                <label class="sad">
                    <input type="radio" value="2" name="feedback" />
                    <div>
                        <svg class="eye left">
                            <path d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1"></path>
                        </svg>
                        <svg class="eye right">
                            <path d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1"></path>
                        </svg>
                        <svg class="mouth">
                            <path d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1"></path>
                        </svg>
                    </div>
                </label>
                <label class="ok">
                    <input type="radio" value="3" name="feedback" />
                    <div></div>
                </label>
                <label class="good">
                    <input type="radio" value="4" name="feedback" checked />
                    <div>
                        <svg class="eye left">
                            <path d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1"></path>
                        </svg>
                        <svg class="eye right">
                            <path d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1"></path>
                        </svg>
                        <svg class="mouth">
                            <path d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1"></path>
                        </svg>
                    </div>
                </label>
                <label class="happy">
                    <input type="radio" value="5" name="feedback" />
                    <div>
                        <svg class="eye left">
                            <path d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1"></path>
                        </svg>
                        <svg class="eye right">
                            <path d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1"></path>
                        </svg>
                    </div>
                </label>
            </div>
        </div>
    )
};