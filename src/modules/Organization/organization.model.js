import mongoose, { Schema } from 'mongoose';

const OrganizationSchema = new Schema({
  workspace: {
    type: String,
    required: [true, 'Workspace is required'],
  },
  organizationName: {
    type: String,
    required: [true, 'Organization Name is required'],
  },
  company: {
    type: String,
    required: [true, 'Company Name is required'],
  },
  organizationLogo: {
    type: String,
    required: [true, 'Organization Logo is required'],
  },
  workspaceUrl: {
    type: String,
    required: [true, 'Workspace Url is required'],
  },
  android: {
    type: {
      currentVersion: Number,
      latestVersion: Number,
      isForceUpdate: Number,
    },
  },
  ios: {
    type: {
      currentVersion: Number,
      latestVersion: Number,
      isForceUpdate: Number,
    },
  },
});

export default mongoose.model('organization', OrganizationSchema);
