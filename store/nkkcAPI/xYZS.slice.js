import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_xyz_list = createAsyncThunk(
  "xYZS/api_v1_xyz_list",
  async payload => {
    const response = await apiService.api_v1_xyz_list(payload)
    return response.data
  }
)
export const api_v1_xyz_create = createAsyncThunk(
  "xYZS/api_v1_xyz_create",
  async payload => {
    const response = await apiService.api_v1_xyz_create(payload)
    return response.data
  }
)
export const api_v1_xyz_retrieve = createAsyncThunk(
  "xYZS/api_v1_xyz_retrieve",
  async payload => {
    const response = await apiService.api_v1_xyz_retrieve(payload)
    return response.data
  }
)
export const api_v1_xyz_update = createAsyncThunk(
  "xYZS/api_v1_xyz_update",
  async payload => {
    const response = await apiService.api_v1_xyz_update(payload)
    return response.data
  }
)
export const api_v1_xyz_partial_update = createAsyncThunk(
  "xYZS/api_v1_xyz_partial_update",
  async payload => {
    const response = await apiService.api_v1_xyz_partial_update(payload)
    return response.data
  }
)
export const api_v1_xyz_destroy = createAsyncThunk(
  "xYZS/api_v1_xyz_destroy",
  async payload => {
    const response = await apiService.api_v1_xyz_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const xYZSSlice = createSlice({
  name: "xYZS",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_xyz_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_xyz_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xyz_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xyz_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_xyz_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xyz_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xyz_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_xyz_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xyz_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xyz_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_xyz_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xyz_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xyz_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_xyz_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xyz_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xyz_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_xyz_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xyz_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_xyz_list,
  api_v1_xyz_create,
  api_v1_xyz_retrieve,
  api_v1_xyz_update,
  api_v1_xyz_partial_update,
  api_v1_xyz_destroy,
  slice: xYZSSlice
}
