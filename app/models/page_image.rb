class PageImage
  belongs_to :page
  mount_uploader :ckeditor_attachment_file_uploader, CkeditorAttachmentFileUploader
end
