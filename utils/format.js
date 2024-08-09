import { ObjectId } from 'mongodb';

/**
 * creates formatted output from given document
 * @param {Object} document
 * @returns {Object} - formatted output
 */
export default function formatFileDocument(document) {
  let { userId, parentId } = document;
  const {
    _id, name, type, isPublic,
  } = document;
  const id = _id.toString();
  userId = userId.toString();
  parentId = parentId instanceof ObjectId ? parentId.toString() : parentId;
  const formattedResponseDocument = {
    id,
    userId,
    name,
    type,
    isPublic,
    parentId,
  };
  return formattedResponseDocument;
}
