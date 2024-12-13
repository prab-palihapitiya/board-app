import { create } from 'zustand';

interface SearchState {
    searchQuery: string;
}

interface SearchActions {
    setSearchQuery: (title: string) => void;
}

export const useSearchStore = create<SearchState & SearchActions>((set) => ({
    searchQuery: '',
    setSearchQuery: (searchQuery) => set({ searchQuery }),
}));
