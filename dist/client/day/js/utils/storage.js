/**
 * Storage Utilities
 * Handle localStorage operations with error handling
 */

const Storage = {
    /**
     * Get item from localStorage
     * @param {string} key - Storage key
     * @param {*} defaultValue - Default value if key doesn't exist
     * @returns {*} Stored value or default
     */
    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.warn(`Error reading from localStorage key "${key}":`, error);
            return defaultValue;
        }
    },

    /**
     * Set item in localStorage
     * @param {string} key - Storage key
     * @param {*} value - Value to store
     * @returns {boolean} Success status
     */
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.warn(`Error writing to localStorage key "${key}":`, error);
            return false;
        }
    },

    /**
     * Remove item from localStorage
     * @param {string} key - Storage key
     * @returns {boolean} Success status
     */
    remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.warn(`Error removing localStorage key "${key}":`, error);
            return false;
        }
    },

    /**
     * Clear all items from localStorage
     * @returns {boolean} Success status
     */
    clear() {
        try {
            localStorage.clear();
            return true;
        } catch (error) {
            console.warn('Error clearing localStorage:', error);
            return false;
        }
    },

    /**
     * Check if key exists in localStorage
     * @param {string} key - Storage key
     * @returns {boolean} True if key exists
     */
    has(key) {
        return localStorage.getItem(key) !== null;
    },

    /**
     * Get all keys from localStorage
     * @returns {Array} Array of keys
     */
    keys() {
        const keys = [];
        for (let i = 0; i < localStorage.length; i++) {
            keys.push(localStorage.key(i));
        }
        return keys;
    },

    /**
     * Get the size of localStorage in bytes
     * @returns {number} Size in bytes
     */
    size() {
        let total = 0;
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            total += key.length + value.length;
        }
        return total * 2; // UTF-16 characters = 2 bytes each
    }
};

/**
 * User Progress Manager
 * Manages course progress with localStorage
 */
const ProgressManager = {
    STORAGE_KEY: 'day_progress',

    /**
     * Get all progress data
     * @returns {Object} Progress object with course URLs as keys
     */
    getAll() {
        return Storage.get(this.STORAGE_KEY, {});
    },

    /**
     * Get progress for a specific course
     * @param {string} courseUrl - Course URL
     * @returns {number} Progress percentage (0-100)
     */
    get(courseUrl) {
        const allProgress = this.getAll();
        return allProgress[courseUrl] || 0;
    },

    /**
     * Set progress for a specific course
     * @param {string} courseUrl - Course URL
     * @param {number} progress - Progress percentage (0-100)
     * @returns {boolean} Success status
     */
    set(courseUrl, progress) {
        const allProgress = this.getAll();
        allProgress[courseUrl] = Math.min(100, Math.max(0, progress));
        return Storage.set(this.STORAGE_KEY, allProgress);
    },

    /**
     * Increment progress for a course
     * @param {string} courseUrl - Course URL
     * @param {number} amount - Amount to increment (default: 25)
     * @returns {number} New progress value
     */
    increment(courseUrl, amount = 25) {
        const current = this.get(courseUrl);
        const newProgress = Math.min(100, current + amount);
        this.set(courseUrl, newProgress);
        return newProgress;
    },

    /**
     * Reset progress for a course
     * @param {string} courseUrl - Course URL
     * @returns {boolean} Success status
     */
    reset(courseUrl) {
        return this.set(courseUrl, 0);
    },

    /**
     * Mark a course as completed
     * @param {string} courseUrl - Course URL
     * @returns {boolean} Success status
     */
    complete(courseUrl) {
        return this.set(courseUrl, 100);
    },

    /**
     * Get completed courses count
     * @returns {number} Number of completed courses
     */
    getCompletedCount() {
        const allProgress = this.getAll();
        return Object.values(allProgress).filter(p => p >= 100).length;
    },

    /**
     * Get courses in progress count
     * @returns {number} Number of courses in progress
     */
    getInProgressCount() {
        const allProgress = this.getAll();
        return Object.values(allProgress).filter(p => p > 0 && p < 100).length;
    },

    /**
     * Get overall progress statistics
     * @returns {Object} Progress statistics
     */
    getStats() {
        const allProgress = this.getAll();
        const values = Object.values(allProgress);

        return {
            total: values.length,
            completed: values.filter(p => p >= 100).length,
            inProgress: values.filter(p => p > 0 && p < 100).length,
            notStarted: values.filter(p => p === 0).length,
            averageProgress: values.length > 0
                ? Math.round(values.reduce((sum, p) => sum + p, 0) / values.length)
                : 0
        };
    },

    /**
     * Clear all progress data
     * @returns {boolean} Success status
     */
    clearAll() {
        return Storage.remove(this.STORAGE_KEY);
    },

    /**
     * Export progress data as JSON
     * @returns {string} JSON string
     */
    export() {
        return JSON.stringify(this.getAll(), null, 2);
    },

    /**
     * Import progress data from JSON
     * @param {string} jsonData - JSON string
     * @returns {boolean} Success status
     */
    import(jsonData) {
        try {
            const data = JSON.parse(jsonData);
            if (typeof data === 'object' && data !== null) {
                return Storage.set(this.STORAGE_KEY, data);
            }
            return false;
        } catch (error) {
            console.error('Error importing progress data:', error);
            return false;
        }
    }
};

/**
 * User Preferences Manager
 * Manages user preferences with localStorage
 */
const PreferencesManager = {
    STORAGE_KEY: 'day_preferences',

    /**
     * Get default preferences
     * @returns {Object} Default preferences
     */
    getDefaults() {
        return {
            theme: 'light',
            language: 'zh-CN',
            sortBy: 'default',
            viewMode: 'grid',
            itemsPerPage: 20,
            showProgress: true,
            showDifficulty: true,
            showPlatform: true,
            sidebarCollapsed: false
        };
    },

    /**
     * Get all preferences
     * @returns {Object} Preferences object
     */
    getAll() {
        return Storage.get(this.STORAGE_KEY, this.getDefaults());
    },

    /**
     * Get a specific preference
     * @param {string} key - Preference key
     * @returns {*} Preference value
     */
    get(key) {
        const prefs = this.getAll();
        return prefs[key];
    },

    /**
     * Set a specific preference
     * @param {string} key - Preference key
     * @param {*} value - Preference value
     * @returns {boolean} Success status
     */
    set(key, value) {
        const prefs = this.getAll();
        prefs[key] = value;
        return Storage.set(this.STORAGE_KEY, prefs);
    },

    /**
     * Update multiple preferences
     * @param {Object} updates - Object with preference updates
     * @returns {boolean} Success status
     */
    update(updates) {
        const prefs = this.getAll();
        Object.assign(prefs, updates);
        return Storage.set(this.STORAGE_KEY, prefs);
    },

    /**
     * Reset preferences to defaults
     * @returns {boolean} Success status
     */
    reset() {
        return Storage.set(this.STORAGE_KEY, this.getDefaults());
    }
};

/**
 * Recent Searches Manager
 * Manages recent search history
 */
const SearchHistoryManager = {
    STORAGE_KEY: 'day_search_history',
    MAX_ITEMS: 10,

    /**
     * Get all recent searches
     * @returns {Array} Array of search strings
     */
    getAll() {
        return Storage.get(this.STORAGE_KEY, []);
    },

    /**
     * Add a search to history
     * @param {string} query - Search query
     */
    add(query) {
        if (!query || query.trim() === '') return;

        let history = this.getAll();

        // Remove if already exists
        history = history.filter(item => item !== query);

        // Add to beginning
        history.unshift(query);

        // Limit size
        if (history.length > this.MAX_ITEMS) {
            history = history.slice(0, this.MAX_ITEMS);
        }

        Storage.set(this.STORAGE_KEY, history);
    },

    /**
     * Remove a search from history
     * @param {string} query - Search query to remove
     */
    remove(query) {
        const history = this.getAll().filter(item => item !== query);
        Storage.set(this.STORAGE_KEY, history);
    },

    /**
     * Clear all search history
     */
    clear() {
        Storage.remove(this.STORAGE_KEY);
    }
};

/**
 * Favorites Manager
 * Manages user's favorite courses
 */
const FavoritesManager = {
    STORAGE_KEY: 'day_favorites',

    /**
     * Get all favorite course URLs
     * @returns {Array} Array of course URLs
     */
    getAll() {
        return Storage.get(this.STORAGE_KEY, []);
    },

    /**
     * Check if a course is favorited
     * @param {string} courseUrl - Course URL
     * @returns {boolean} True if favorited
     */
    has(courseUrl) {
        return this.getAll().includes(courseUrl);
    },

    /**
     * Toggle favorite status
     * @param {string} courseUrl - Course URL
     * @returns {boolean} New favorite status
     */
    toggle(courseUrl) {
        let favorites = this.getAll();

        if (favorites.includes(courseUrl)) {
            favorites = favorites.filter(url => url !== courseUrl);
        } else {
            favorites.push(courseUrl);
        }

        Storage.set(this.STORAGE_KEY, favorites);
        return favorites.includes(courseUrl);
    },

    /**
     * Add a course to favorites
     * @param {string} courseUrl - Course URL
     */
    add(courseUrl) {
        const favorites = this.getAll();
        if (!favorites.includes(courseUrl)) {
            favorites.push(courseUrl);
            Storage.set(this.STORAGE_KEY, favorites);
        }
    },

    /**
     * Remove a course from favorites
     * @param {string} courseUrl - Course URL
     */
    remove(courseUrl) {
        const favorites = this.getAll().filter(url => url !== courseUrl);
        Storage.set(this.STORAGE_KEY, favorites);
    },

    /**
     * Get favorites count
     * @returns {number} Number of favorites
     */
    count() {
        return this.getAll().length;
    },

    /**
     * Clear all favorites
     */
    clear() {
        Storage.remove(this.STORAGE_KEY);
    }
};

/**
 * Course Views Manager
 * Tracks how many times each course has been viewed
 */
const CourseViewsManager = {
    STORAGE_KEY: 'day_course_views',

    /**
     * Get all view data
     * @returns {Object} View counts keyed by course URL
     */
    getAll() {
        return Storage.get(this.STORAGE_KEY, {});
    },

    /**
     * Record a view for a course
     * @param {string} courseUrl - Course URL
     */
    recordView(courseUrl) {
        const views = this.getAll();
        views[courseUrl] = (views[courseUrl] || 0) + 1;
        Storage.set(this.STORAGE_KEY, views);
    },

    /**
     * Get view count for a course
     * @param {string} courseUrl - Course URL
     * @returns {number} View count
     */
    getViews(courseUrl) {
        const views = this.getAll();
        return views[courseUrl] || 0;
    },

    /**
     * Get top viewed courses
     * @param {number} limit - Max courses to return
     * @returns {Array} Array of { url, views } sorted by views desc
     */
    getTopViewed(limit = 10) {
        const views = this.getAll();
        return Object.entries(views)
            .map(([url, count]) => ({ url, views: count }))
            .sort((a, b) => b.views - a.views)
            .slice(0, limit);
    },

    /**
     * Clear all view data
     */
    clear() {
        Storage.remove(this.STORAGE_KEY);
    }
};

/**
 * Notes Manager
 * Manages personal notes for courses
 */
const NotesManager = {
    STORAGE_KEY: 'day_notes',

    /**
     * Get all notes
     * @returns {Object} Notes object with course URLs as keys
     */
    getAll() {
        return Storage.get(this.STORAGE_KEY, {});
    },

    /**
     * Get note for a specific course
     * @param {string} courseUrl - Course URL
     * @returns {Object|null} Note object { text, updatedAt } or null
     */
    get(courseUrl) {
        const allNotes = this.getAll();
        return allNotes[courseUrl] || null;
    },

    /**
     * Save a note for a course
     * @param {string} courseUrl - Course URL
     * @param {string} text - Note text
     * @returns {boolean} Success status
     */
    save(courseUrl, text) {
        const allNotes = this.getAll();
        allNotes[courseUrl] = {
            text: text,
            updatedAt: new Date().toISOString()
        };
        return Storage.set(this.STORAGE_KEY, allNotes);
    },

    /**
     * Delete a note for a course
     * @param {string} courseUrl - Course URL
     * @returns {boolean} Success status
     */
    delete(courseUrl) {
        const allNotes = this.getAll();
        delete allNotes[courseUrl];
        return Storage.set(this.STORAGE_KEY, allNotes);
    },

    /**
     * Check if a course has a note
     * @param {string} courseUrl - Course URL
     * @returns {boolean} True if note exists
     */
    has(courseUrl) {
        const note = this.get(courseUrl);
        return note !== null && note.text && note.text.trim() !== '';
    },

    /**
     * Get count of courses with notes
     * @returns {number} Count
     */
    count() {
        const allNotes = this.getAll();
        return Object.values(allNotes).filter(n => n && n.text && n.text.trim() !== '').length;
    },

    /**
     * Clear all notes
     * @returns {boolean} Success status
     */
    clearAll() {
        return Storage.remove(this.STORAGE_KEY);
    }
};

/**
 * Learning Log Manager
 * Tracks daily learning activity, streaks, and weekly goals
 */
const LearningLogManager = {
    STORAGE_KEY: 'day_learning_log',

    /**
     * Get default data shape
     * @returns {Object} Default learning log
     */
    _getDefaults() {
        return {
            log: {},
            streak: { current: 0, best: 0, lastDate: null },
            weeklyGoal: { target: 300, current: 0 }
        };
    },

    /**
     * Get all learning log data
     * @returns {Object} Full learning log
     */
    getAll() {
        return Storage.get(this.STORAGE_KEY, this._getDefaults());
    },

    /**
     * Save all learning log data
     * @param {Object} data - Data to save
     * @returns {boolean} Success status
     */
    _save(data) {
        return Storage.set(this.STORAGE_KEY, data);
    },

    /**
     * Get today's date string (YYYY-MM-DD)
     * @returns {string} Today's date
     */
    _getToday() {
        return new Date().toISOString().slice(0, 10);
    },

    /**
     * Get yesterday's date string (YYYY-MM-DD)
     * @returns {string} Yesterday's date
     */
    _getYesterday() {
        const d = new Date();
        d.setDate(d.getDate() - 1);
        return d.toISOString().slice(0, 10);
    },

    /**
     * Get the start of the current week (Monday)
     * @returns {string} Date string of Monday
     */
    _getWeekStart() {
        const d = new Date();
        const day = d.getDay();
        const diff = day === 0 ? 6 : day - 1; // Monday = 0
        d.setDate(d.getDate() - diff);
        return d.toISOString().slice(0, 10);
    },

    /**
     * Get today's log entry or default
     * @returns {Object} Today's entry { minutes, tasksCompleted, conceptsReviewed }
     */
    getToday() {
        const data = this.getAll();
        const today = this._getToday();
        return data.log[today] || { minutes: 0, tasksCompleted: 0, conceptsReviewed: 0 };
    },

    /**
     * Log minutes of learning for today
     * @param {number} minutes - Minutes to add
     */
    logMinutes(minutes) {
        minutes = Math.max(0, Math.round(minutes));
        if (minutes === 0) return;

        const data = this.getAll();
        const today = this._getToday();
        const yesterday = this._getYesterday();

        // Update today's log entry
        if (!data.log[today]) {
            data.log[today] = { minutes: 0, tasksCompleted: 0, conceptsReviewed: 0 };
        }
        data.log[today].minutes += minutes;

        // Update streak
        if (data.streak.lastDate === today) {
            // Already logged today, no streak change
        } else if (data.streak.lastDate === yesterday) {
            // Consecutive day
            data.streak.current += 1;
        } else if (data.streak.lastDate !== today) {
            // Streak broken or first time
            data.streak.current = 1;
        }
        data.streak.lastDate = today;
        if (data.streak.current > data.streak.best) {
            data.streak.best = data.streak.current;
        }

        // Update weekly goal progress
        this._recalcWeekly(data);

        this._save(data);
    },

    /**
     * Recalculate weekly goal progress from log data
     * @param {Object} data - Learning log data
     */
    _recalcWeekly(data) {
        const weekStart = this._getWeekStart();
        let weekMinutes = 0;
        const log = data.log;

        for (const dateStr of Object.keys(log)) {
            if (dateStr >= weekStart) {
                weekMinutes += log[dateStr].minutes || 0;
            }
        }
        data.weeklyGoal.current = weekMinutes;
    },

    /**
     * Log a completed task for today
     */
    logTaskCompleted() {
        const data = this.getAll();
        const today = this._getToday();

        if (!data.log[today]) {
            data.log[today] = { minutes: 0, tasksCompleted: 0, conceptsReviewed: 0 };
        }
        data.log[today].tasksCompleted += 1;

        // Ensure streak is updated if not already
        this._ensureStreak(data, today);

        this._save(data);
    },

    /**
     * Log reviewed concepts for today
     * @param {number} count - Number of concepts reviewed (default 1)
     */
    logConceptReviewed(count) {
        count = count || 1;
        const data = this.getAll();
        const today = this._getToday();

        if (!data.log[today]) {
            data.log[today] = { minutes: 0, tasksCompleted: 0, conceptsReviewed: 0 };
        }
        data.log[today].conceptsReviewed += count;

        // Ensure streak is updated if not already
        this._ensureStreak(data, today);

        this._save(data);
    },

    /**
     * Ensure streak is updated for today
     * @param {Object} data - Learning log data
     * @param {string} today - Today's date string
     */
    _ensureStreak(data, today) {
        const yesterday = this._getYesterday();
        if (data.streak.lastDate === today) return;

        if (data.streak.lastDate === yesterday) {
            data.streak.current += 1;
        } else {
            data.streak.current = 1;
        }
        data.streak.lastDate = today;
        if (data.streak.current > data.streak.best) {
            data.streak.best = data.streak.current;
        }
    },

    /**
     * Get streak data
     * @returns {Object} Streak { current, best, lastDate }
     */
    getStreak() {
        return this.getAll().streak;
    },

    /**
     * Get weekly progress
     * @returns {Object} { target, current, percentage }
     */
    getWeeklyProgress() {
        const data = this.getAll();
        this._recalcWeekly(data);
        this._save(data);

        const { target, current } = data.weeklyGoal;
        return {
            target,
            current,
            percentage: target > 0 ? Math.min(100, Math.round((current / target) * 100)) : 0
        };
    },

    /**
     * Get year data for calendar heatmap
     * @returns {Object} Object mapping date strings to minutes
     */
    getYearData() {
        const data = this.getAll();
        const year = new Date().getFullYear();
        const result = {};

        // Initialize all days of the year with 0
        const startDate = new Date(year, 0, 1);
        const endDate = new Date(year, 11, 31);
        for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
            const key = d.toISOString().slice(0, 10);
            result[key] = 0;
        }

        // Fill in actual data
        for (const [dateStr, entry] of Object.entries(data.log)) {
            if (dateStr.startsWith(String(year))) {
                result[dateStr] = entry.minutes || 0;
            }
        }

        return result;
    },

    /**
     * Get total statistics
     * @returns {Object} { totalDays, totalMinutes, longestStreak, currentMonthMinutes }
     */
    getTotalStats() {
        const data = this.getAll();
        const log = data.log;
        const now = new Date();
        const currentMonth = now.toISOString().slice(0, 7); // "2026-06"

        let totalDays = 0;
        let totalMinutes = 0;
        let currentMonthMinutes = 0;

        for (const [dateStr, entry] of Object.entries(log)) {
            const mins = entry.minutes || 0;
            if (mins > 0) {
                totalDays += 1;
                totalMinutes += mins;
            }
            if (dateStr.startsWith(currentMonth)) {
                currentMonthMinutes += mins;
            }
        }

        return {
            totalDays,
            totalMinutes,
            longestStreak: data.streak.best || 0,
            currentMonthMinutes
        };
    },

    /**
     * Get last n days of data
     * @param {number} n - Number of days
     * @returns {Array} Array of { date, minutes, tasksCompleted, conceptsReviewed }
     */
    getRecentDays(n) {
        n = n || 7;
        const data = this.getAll();
        const result = [];
        const d = new Date();

        for (let i = 0; i < n; i++) {
            const dateStr = d.toISOString().slice(0, 10);
            const entry = data.log[dateStr] || { minutes: 0, tasksCompleted: 0, conceptsReviewed: 0 };
            result.unshift({ date: dateStr, ...entry });
            d.setDate(d.getDate() - 1);
        }

        return result;
    },

    /**
     * Clear all learning log data
     */
    clear() {
        Storage.remove(this.STORAGE_KEY);
    }
};

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        Storage,
        ProgressManager,
        PreferencesManager,
        SearchHistoryManager,
        FavoritesManager,
        CourseViewsManager,
        NotesManager,
        LearningLogManager
    };
}