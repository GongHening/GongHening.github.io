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

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        Storage,
        ProgressManager,
        PreferencesManager,
        SearchHistoryManager,
        FavoritesManager,
        CourseViewsManager,
        NotesManager
    };
}