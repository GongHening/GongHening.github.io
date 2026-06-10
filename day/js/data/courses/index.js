/**
 * Courses Data Index
 * Aggregates all course data from individual domain files
 */

// Import all domain courses (these will be loaded via script tags)
// const ML_COURSES = [...]; // from ml.js
// const DL_COURSES = [...]; // from dl.js
// etc.

/**
 * Get all courses from all domains
 * @returns {Array} Complete array of all courses
 */
function getAllCourses() {
    const allCourses = [];

    if (typeof ML_COURSES !== 'undefined') allCourses.push(...ML_COURSES);
    if (typeof DL_COURSES !== 'undefined') allCourses.push(...DL_COURSES);
    if (typeof NLP_COURSES !== 'undefined') allCourses.push(...NLP_COURSES);
    if (typeof CV_COURSES !== 'undefined') allCourses.push(...CV_COURSES);
    if (typeof RL_COURSES !== 'undefined') allCourses.push(...RL_COURSES);
    if (typeof GENAI_COURSES !== 'undefined') allCourses.push(...GENAI_COURSES);
    if (typeof AGENTS_COURSES !== 'undefined') allCourses.push(...AGENTS_COURSES);
    if (typeof SAFETY_COURSES !== 'undefined') allCourses.push(...SAFETY_COURSES);
    if (typeof ROBOTICS_COURSES !== 'undefined') allCourses.push(...ROBOTICS_COURSES);
    if (typeof SPEECH_COURSES !== 'undefined') allCourses.push(...SPEECH_COURSES);
    if (typeof INFRA_COURSES !== 'undefined') allCourses.push(...INFRA_COURSES);

    return allCourses;
}

/**
 * Get courses by domain ID
 * @param {string} domainId - Domain identifier
 * @returns {Array} Courses for the specified domain
 */
function getCoursesByDomain(domainId) {
    const domainCoursesMap = {
        'ml': typeof ML_COURSES !== 'undefined' ? ML_COURSES : [],
        'dl': typeof DL_COURSES !== 'undefined' ? DL_COURSES : [],
        'nlp': typeof NLP_COURSES !== 'undefined' ? NLP_COURSES : [],
        'cv': typeof CV_COURSES !== 'undefined' ? CV_COURSES : [],
        'rl': typeof RL_COURSES !== 'undefined' ? RL_COURSES : [],
        'genai': typeof GENAI_COURSES !== 'undefined' ? GENAI_COURSES : [],
        'agents': typeof AGENTS_COURSES !== 'undefined' ? AGENTS_COURSES : [],
        'safety': typeof SAFETY_COURSES !== 'undefined' ? SAFETY_COURSES : [],
        'robotics': typeof ROBOTICS_COURSES !== 'undefined' ? ROBOTICS_COURSES : [],
        'speech': typeof SPEECH_COURSES !== 'undefined' ? SPEECH_COURSES : [],
        'infra': typeof INFRA_COURSES !== 'undefined' ? INFRA_COURSES : []
    };

    return domainCoursesMap[domainId] || [];
}

/**
 * Get course by URL (unique identifier)
 * @param {string} url - Course URL
 * @returns {Object|null} Course object or null
 */
function getCourseByUrl(url) {
    const allCourses = getAllCourses();
    return allCourses.find(course => course.u === url) || null;
}

/**
 * Search courses by query
 * @param {string} query - Search query
 * @returns {Array} Matching courses
 */
function searchCourses(query) {
    if (!query || query.trim() === '') {
        return getAllCourses();
    }

    const searchTerm = query.toLowerCase().trim();
    const allCourses = getAllCourses();

    return allCourses.filter(course => {
        const searchableText = [
            course.n,      // name
            course.i,      // institution
            course.p,      // platform
            course.desc,   // description
            ...course.t    // tags
        ].join(' ').toLowerCase();

        return searchableText.includes(searchTerm);
    });
}

/**
 * Filter courses by criteria
 * @param {Object} filters - Filter criteria
 * @returns {Array} Filtered courses
 */
function filterCourses(filters = {}) {
    let courses = getAllCourses();

    // Filter by domain
    if (filters.domain) {
        courses = courses.filter(course => course.cat === filters.domain);
    }

    // Filter by difficulty
    if (filters.difficulty) {
        courses = courses.filter(course => course.d === parseInt(filters.difficulty));
    }

    // Filter by platform
    if (filters.platform) {
        courses = courses.filter(course => course.p === filters.platform);
    }

    // Filter by search query
    if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        courses = courses.filter(course => {
            const searchableText = [
                course.n,
                course.i,
                course.p,
                course.desc,
                ...course.t
            ].join(' ').toLowerCase();

            return searchableText.includes(searchTerm);
        });
    }

    return courses;
}

/**
 * Sort courses
 * @param {Array} courses - Courses to sort
 * @param {string} sortBy - Sort criteria
 * @returns {Array} Sorted courses
 */
function sortCourses(courses, sortBy = 'default') {
    const sorted = [...courses];

    switch (sortBy) {
        case 'difficulty-asc':
            sorted.sort((a, b) => a.d - b.d);
            break;
        case 'difficulty-desc':
            sorted.sort((a, b) => b.d - a.d);
            break;
        case 'hours-asc':
            sorted.sort((a, b) => a.h - b.h);
            break;
        case 'hours-desc':
            sorted.sort((a, b) => b.h - a.h);
            break;
        case 'name-asc':
            sorted.sort((a, b) => a.n.localeCompare(b.n));
            break;
        case 'name-desc':
            sorted.sort((a, b) => b.n.localeCompare(a.n));
            break;
        case 'institution':
            sorted.sort((a, b) => a.i.localeCompare(b.i));
            break;
        default:
            // Keep original order
            break;
    }

    return sorted;
}

/**
 * Get unique platforms from all courses
 * @returns {Array} Array of platform names
 */
function getUniquePlatforms() {
    const allCourses = getAllCourses();
    const platforms = [...new Set(allCourses.map(course => course.p))];
    return platforms.sort();
}

/**
 * Get unique institutions from all courses
 * @returns {Array} Array of institution names
 */
function getUniqueInstitutions() {
    const allCourses = getAllCourses();
    const institutions = [...new Set(allCourses.map(course => course.i))];
    return institutions.sort();
}

/**
 * Get course statistics
 * @returns {Object} Statistics object
 */
function getCourseStats() {
    const allCourses = getAllCourses();

    const stats = {
        total: allCourses.length,
        byDomain: {},
        byDifficulty: {
            1: 0, // 入门
            2: 0, // 初级
            3: 0, // 中级
            4: 0, // 高级
            5: 0  // 专家
        },
        totalHours: 0,
        avgDifficulty: 0,
        avgHours: 0
    };

    allCourses.forEach(course => {
        // Count by domain
        stats.byDomain[course.cat] = (stats.byDomain[course.cat] || 0) + 1;

        // Count by difficulty
        stats.byDifficulty[course.d] = (stats.byDifficulty[course.d] || 0) + 1;

        // Sum hours
        stats.totalHours += course.h;
    });

    // Calculate averages
    if (stats.total > 0) {
        stats.avgDifficulty = (allCourses.reduce((sum, c) => sum + c.d, 0) / stats.total).toFixed(1);
        stats.avgHours = Math.round(stats.totalHours / stats.total);
    }

    return stats;
}

/**
 * Get recommended courses based on difficulty level
 * @param {number} currentDifficulty - Current user level (1-5)
 * @param {number} limit - Number of recommendations
 * @returns {Array} Recommended courses
 */
function getRecommendedCourses(currentDifficulty, limit = 5) {
    const allCourses = getAllCourses();

    // Get courses at or slightly above current level
    const recommended = allCourses
        .filter(course => course.d >= currentDifficulty && course.d <= currentDifficulty + 1)
        .sort(() => Math.random() - 0.5) // Shuffle
        .slice(0, limit);

    return recommended;
}

/**
 * Get popular courses (by tag frequency)
 * @param {number} limit - Number of courses to return
 * @returns {Array} Popular courses
 */
function getPopularCourses(limit = 10) {
    const allCourses = getAllCourses();

    // Count tag frequency
    const tagCount = {};
    allCourses.forEach(course => {
        course.t.forEach(tag => {
            tagCount[tag] = (tagCount[tag] || 0) + 1;
        });
    });

    // Score courses by their tag popularity
    const scoredCourses = allCourses.map(course => ({
        ...course,
        popularityScore: course.t.reduce((sum, tag) => sum + (tagCount[tag] || 0), 0)
    }));

    // Sort by popularity score and return top courses
    return scoredCourses
        .sort((a, b) => b.popularityScore - a.popularityScore)
        .slice(0, limit);
}

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getAllCourses,
        getCoursesByDomain,
        getCourseByUrl,
        searchCourses,
        filterCourses,
        sortCourses,
        getUniquePlatforms,
        getUniqueInstitutions,
        getCourseStats,
        getRecommendedCourses,
        getPopularCourses
    };
}